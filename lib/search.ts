export const searchByImage = async (image: string) => {
  const formdata = new FormData();
  formdata.append("image", image);

  const requestOptions = {
    method: "POST",
    body: formdata,
  };

  const response = await fetch(
    `${process.env.EXPO_PUBLIC_APP_HOST}/search`,
    requestOptions
  );
  const data = await response.json();
  return data.results;
};
