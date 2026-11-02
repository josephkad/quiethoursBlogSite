interface sectionItem {
    sectionTitle?: string,
    sectionContent: string
}

export interface blogData {
    image: string,
    title: string,
    exerpt: string,
    date: string,
    category: string,
    blog: sectionItem[],
}

const blogs: blogData[] = []

// blogs.push({
//     img: '',
//     title: '',
//     exerpt: '',
//     date: '',
//     category: '',

//     blog: {

//     }
// })
export default blogs