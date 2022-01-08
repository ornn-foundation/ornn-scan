import axios from "axios";

const config = () => {
  return {};
};

export const _get = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error.toJSON());
  }
};

export const _post = async (url: string, body?: any) => {
  try {
    const res = await axios.post(url, body);
    return res.data;
  } catch (error) {
    console.log(error.toJSON());
  }
};
