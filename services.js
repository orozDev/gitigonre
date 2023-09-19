const makeMessage = () => `
        Select option:
          1. Add news
          2. List of news
          3. Delete news
          4. Edit news
          5. Get one news
          0. Exit
    `

const getCurrentDate = () => {
    const now = new Date();
    const date = now.getDate() < 10 ? '0' + now.getDate(): now.getDate()
    const month = now.getMonth() + 1 < 10? '0' + (now.getMonth() + 1): (now.getMonth() + 1)
    const year = now.getFullYear()
    return `${date}-${month}-${year}`
}

const getAllCategoryAsMessage = () => {
    let message = 'Select category'
    for (const category of  categories) {
        message += `\n${category.id}. ${category.title}`
    }
    return message
}

const createNews = ({ 
    title,
    content,
    description,
    date,
    category
}) => news.push(new News({
    title, 
    content, 
    description, 
    date, 
    category
}))


const leftJoinAndSelect = ({data, relationData, dataField}) => {
    return data.map(item => {
        item[dataField] = relationData.find(innerItem => innerItem.id === item[dataField])
        return item
    })   
}

const getNews = () => {
    return leftJoinAndSelect({
        data: news, 
        relationData: categories, 
        dataField: 'category',
    })
}