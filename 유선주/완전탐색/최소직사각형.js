function solution (sizes) {
    const width = Math.max(...sizes.map(([a,b]) => a > b ? a : b))
    const height = Math.max(...sizes.map(([a,b]) => a > b ? b : a))
    
    return width * height
}