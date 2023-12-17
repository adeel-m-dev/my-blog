import { createClient } from "contentful";

const spaceId = "2tk4erwmnu0p";
const accessToken = "gBbBmQcYphkLWuVNvHKUrmuU9xBDGa-ZtgNe9addOrc";

export const useContentFullHook = () => {
  const client = createClient({
    space: spaceId,
    accessToken,
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
        };
      });
      return sanitizedResponse;
    } catch (error) {
      return error;
    }
  };

  return { getPosts, getHeader };
};
