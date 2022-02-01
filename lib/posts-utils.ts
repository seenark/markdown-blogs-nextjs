import { IPostItem } from './../components/post/post-item';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), "posts")

export function getPostFiles() {
    const files = fs.readdirSync(postsDirectory)
    console.log("🚀 ~ file: posts-utils.ts ~ line 10 ~ getPostFiles ~ files", files)
    return files
}

export function getPostData(postIdentifier:string) {
    const slug = postIdentifier.replace(/\.md$/, "")
    const filePath = path.join(postsDirectory, `${slug}.md`)
    console.log("🚀 ~ file: posts-utils.ts ~ line 15 ~ getPostData ~ filePath", filePath)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const {data, content} = matter(fileContent)
    const postData: IPostItem = {
        slug,
        title: data.title,
        image: data.image,
        date: data.date,
        isFeature: data.isFeatured,
        excerpt: data.excerpt,
        content: content
    }
    return postData
}

export function getAllPosts() {
    const postFiles = getPostFiles()
    const allPosts = postFiles.map(filename => {
        return getPostData(filename)
    })

    const sortedPosts = allPosts.sort((a,b) => a.date > b.date ? -1: 1)
    return sortedPosts
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeature)
    return featuredPosts
}