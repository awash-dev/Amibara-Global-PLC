// lib/actions/updates.ts
"use server";

import { db } from "@/lib/db";
import { updates, type NewUpdate } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// Helper function to create URL-friendly slug
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Get all updates (published only)
export async function getUpdates() {
  try {
    const allUpdates = await db
      .select()
      .from(updates)
      .where(eq(updates.published, true))
      .orderBy(desc(updates.createdAt));
    return allUpdates;
  } catch (error) {
    console.error("Error fetching updates:", error);
    return [];
  }
}

// Get all updates (including unpublished - for admin)
export async function getAllUpdates() {
  try {
    const allUpdates = await db
      .select()
      .from(updates)
      .orderBy(desc(updates.createdAt));
    return allUpdates;
  } catch (error) {
    console.error("Error fetching all updates:", error);
    return [];
  }
}

// Get single update by ID
export async function getUpdateById(id: number) {
  try {
    const [update] = await db
      .select()
      .from(updates)
      .where(eq(updates.id, id))
      .limit(1);
    return update || null;
  } catch (error) {
    console.error("Error fetching update by ID:", error);
    return null;
  }
}

// Get single update by slug
export async function getUpdateBySlug(slug: string) {
  try {
    const [update] = await db
      .select()
      .from(updates)
      .where(eq(updates.slug, slug))
      .limit(1);
    return update || null;
  } catch (error) {
    console.error("Error fetching update by slug:", error);
    return null;
  }
}

// Create new update
export async function createUpdate(data: {
  title: string;
  description: string;
  category: string;
  badge?: string;
  color?: string;
}) {
  try {
    // Validate required fields
    if (!data.title || !data.description || !data.category) {
      return {
        success: false,
        error: "Title, description, and category are required",
      };
    }

    // Validate minimum length
    if (data.title.length < 3) {
      return {
        success: false,
        error: "Title must be at least 3 characters long",
      };
    }

    if (data.description.length < 10) {
      return {
        success: false,
        error: "Description must be at least 10 characters long",
      };
    }

    // Generate slug
    const slug = createSlug(data.title);

    // Validate slug
    if (!slug || slug.length === 0) {
      return {
        success: false,
        error: "Title must contain at least some alphanumeric characters",
      };
    }

    // Check if slug already exists
    const existingUpdate = await getUpdateBySlug(slug);
    if (existingUpdate) {
      return {
        success: false,
        error: "An update with this title already exists. Please use a different title.",
      };
    }

    // Insert into database
    const [newUpdate] = await db
      .insert(updates)
      .values({
        title: data.title.trim(),
        description: data.description.trim(),
        category: data.category,
        badge: data.badge?.trim() || null,
        color: data.color || "from-blue-500 to-cyan-500",
        slug,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    // Revalidate paths
    revalidatePath("/updates");
    revalidatePath("/admin/updates");

    return {
      success: true,
      data: newUpdate,
      message: "Update created successfully!",
    };
  } catch (error) {
    console.error("Error creating update:", error);
    return {
      success: false,
      error: "Failed to create update. Please try again.",
    };
  }
}

// Update existing update
export async function updateUpdate(
  id: number,
  data: {
    title: string;
    description: string;
    category: string;
    badge?: string;
    color?: string;
  }
) {
  try {
    // Validate required fields
    if (!data.title || !data.description || !data.category) {
      return {
        success: false,
        error: "Title, description, and category are required",
      };
    }

    // Validate minimum length
    if (data.title.length < 3) {
      return {
        success: false,
        error: "Title must be at least 3 characters long",
      };
    }

    if (data.description.length < 10) {
      return {
        success: false,
        error: "Description must be at least 10 characters long",
      };
    }

    // Generate new slug from title
    const slug = createSlug(data.title);

    // Validate slug
    if (!slug || slug.length === 0) {
      return {
        success: false,
        error: "Title must contain at least some alphanumeric characters",
      };
    }

    // Check if new slug conflicts with another update
    const existingUpdate = await getUpdateBySlug(slug);
    if (existingUpdate && existingUpdate.id !== id) {
      return {
        success: false,
        error: "An update with this title already exists. Please use a different title.",
      };
    }

    // Update the record
    const [updatedPost] = await db
      .update(updates)
      .set({
        title: data.title.trim(),
        description: data.description.trim(),
        category: data.category,
        badge: data.badge?.trim() || null,
        color: data.color || "from-blue-500 to-cyan-500",
        slug,
        updatedAt: new Date(),
      })
      .where(eq(updates.id, id))
      .returning();

    if (!updatedPost) {
      return {
        success: false,
        error: "Update not found",
      };
    }

    // Revalidate paths
    revalidatePath("/updates");
    revalidatePath("/admin/updates");
    revalidatePath(`/updates/${slug}`);

    return {
      success: true,
      data: updatedPost,
      message: "Update modified successfully!",
    };
  } catch (error) {
    console.error("Error updating post:", error);
    return {
      success: false,
      error: "Failed to update post. Please try again.",
    };
  }
}

// Delete update
export async function deleteUpdate(id: number) {
  try {
    // Check if update exists
    const existingUpdate = await getUpdateById(id);
    if (!existingUpdate) {
      return {
        success: false,
        error: "Update not found",
      };
    }

    // Delete the update
    await db.delete(updates).where(eq(updates.id, id));

    // Revalidate paths
    revalidatePath("/updates");
    revalidatePath("/admin/updates");

    return {
      success: true,
      message: "Update deleted successfully!",
    };
  } catch (error) {
    console.error("Error deleting update:", error);
    return {
      success: false,
      error: "Failed to delete update. Please try again.",
    };
  }
}

// Toggle publish status
export async function togglePublishUpdate(id: number, published: boolean) {
  try {
    // Check if update exists
    const existingUpdate = await getUpdateById(id);
    if (!existingUpdate) {
      return {
        success: false,
        error: "Update not found",
      };
    }

    // Update publish status
    await db
      .update(updates)
      .set({
        published,
        updatedAt: new Date(),
      })
      .where(eq(updates.id, id));

    // Revalidate paths
    revalidatePath("/updates");
    revalidatePath("/admin/updates");

    return {
      success: true,
      message: published
        ? "Update published successfully!"
        : "Update unpublished successfully!",
    };
  } catch (error) {
    console.error("Error toggling publish status:", error);
    return {
      success: false,
      error: "Failed to update publish status",
    };
  }
}

// Get updates count
export async function getUpdatesCount() {
  try {
    const allUpdates = await db.select().from(updates);
    return {
      total: allUpdates.length,
      published: allUpdates.filter((u) => u.published).length,
      unpublished: allUpdates.filter((u) => !u.published).length,
    };
  } catch (error) {
    console.error("Error getting updates count:", error);
    return {
      total: 0,
      published: 0,
      unpublished: 0,
    };
  }
}

// Search updates by title or description
export async function searchUpdates(query: string) {
  try {
    if (!query || query.trim().length === 0) {
      return await getUpdates();
    }

    const allUpdates = await getUpdates();
    const searchTerm = query.toLowerCase().trim();

    return allUpdates.filter(
      (update) =>
        update.title.toLowerCase().includes(searchTerm) ||
        update.description.toLowerCase().includes(searchTerm) ||
        update.category.toLowerCase().includes(searchTerm)
    );
  } catch (error) {
    console.error("Error searching updates:", error);
    return [];
  }
}

// Get updates by category
export async function getUpdatesByCategory(category: string) {
  try {
    const allUpdates = await db
      .select()
      .from(updates)
      .where(eq(updates.category, category))
      .orderBy(desc(updates.createdAt));
    return allUpdates;
  } catch (error) {
    console.error("Error fetching updates by category:", error);
    return [];
  }
}

// Get recent updates (limit)
export async function getRecentUpdates(limit: number = 5) {
  try {
    const recentUpdates = await db
      .select()
      .from(updates)
      .where(eq(updates.published, true))
      .orderBy(desc(updates.createdAt))
      .limit(limit);
    return recentUpdates;
  } catch (error) {
    console.error("Error fetching recent updates:", error);
    return [];
  }
}