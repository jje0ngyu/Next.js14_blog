import { readFile } from 'fs/promises';
import path from 'path';

export async function getFeaturedPosts(){
  return getAllPosts()  //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(){
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
  .then(JSON.parse)
  .then((posts) => posts.sort((a,b) => (a.date > b.date ? -1: 1)));
}