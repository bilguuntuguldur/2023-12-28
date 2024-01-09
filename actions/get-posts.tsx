import { Post } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/posts`;


const getPosts = async (): Promise<Post[]> => {

    const res = await fetch(URL);

    return res.json();
};

export default getPosts;