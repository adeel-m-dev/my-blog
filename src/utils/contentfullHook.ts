import { createClient } from "contentful";

export const useContentFullHook = () => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const getHeader = async () => {
    try {
      const response = await client.getEntries({
        content_type: "header",
        select: ["fields"],
      });
      const sanitizedResponse = response.items.map((item: any) => {
        return {
          title: item.fields.title,
          subtitle: item.fields.subtitle,
        };
      });
      return sanitizedResponse;
    } catch (error) {
      return error;
    }
  };

  const getPosts = async () => {
    try {
      const response = await client.getEntries({
        content_type: "blog",
        select: ["fields"],
      });
      const sanitizedResponse = response.items.map((item: any) => {
        return {
          title: item.fields.title,
          slug: item.fields.slug,
          featured_image: item.fields?.featured_image?.fields?.file?.url,
          description: item.fields?.content?.content[0]?.content[0]?.value,
          id: item.sys.id,
        };
      });
      return sanitizedResponse;
    } catch (error) {
      return error;
    }
  };

  const getPost = async (id: string) => {
    try {
      const response: any = await client.getEntry(id);
      const sanitizedResponse = {
        title: response?.fields?.title,
        slug: response?.fields?.slug,
        featured_image: response?.fields?.featured_image?.fields?.file?.url,
        description: response?.fields?.content?.content[0]?.content[0]?.value,
      };
      return sanitizedResponse;
    } catch (error) {
      return error;
    }
  };

  return { getPosts, getHeader, getPost };
};
