function isBread(element, index, array) {
    console.log(index, array)
    return (element === '🥖' || element === '🍞' || element === '🥐')
}
console.log(["🍚", "🥖", "🍞", "🥐", "🧅", "🧄", "🍠"].find(isBread)) 