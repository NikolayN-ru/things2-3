export const getUrlImage = (image) => {
  const a = image.split("/");
  const b = a[a.length - 1];
  return `${process.env.NEXT_PUBLIC_DOMAIN}/media/${b}`;
};