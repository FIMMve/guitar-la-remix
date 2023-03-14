import { useLoaderData } from "react-router"
import { getPost } from "../../models/posts.server"
import { formatearFecha } from "../../utils/helpers"

export async function loader({params}){
  const { postUrl } = params
  const post = await getPost(postUrl)
  if(post.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado'
    })
  }
  return post
}

export function meta({data}){
  if(!data){
    return{
      title: 'GuitarLA - Guitarra No Encontrada',
      descripcion: 'Guitarras, venta de guitarras, Post no encontrado'
    }
  }

  return{
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`
  }
}

function Post() {
  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = post?.data[0].attributes
  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h2>{titulo}</h2>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post
