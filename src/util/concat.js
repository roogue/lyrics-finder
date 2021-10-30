const concat = ({ titles, artists, hrefs }) => {
    const newData = []
    for (let i = 0; i < titles.length; i++) {
        newData.push({ name: titles[i], artist: artists[i], href: hrefs[i] })
    }
    return newData
}

module.exports = concat