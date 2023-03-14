import { useLoaderData } from "react-router"
import { getPosts } from "../../models/posts.server"
import ListadoPosts from "../../components/listado-posts"

export function meta(){
  return{
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA - Blog de música y venta de guitarras'
  }
}

export async function loader(){
  const posts = await getPosts()
  return await posts.data
}

function Blog() {
  const posts = useLoaderData()

  return (
      <ListadoPosts
        posts={posts}
      />
  )
}

export default Blog
