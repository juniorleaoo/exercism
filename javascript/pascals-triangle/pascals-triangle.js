//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numberOfRows) => {
  const triangle = []
  if (numberOfRows >= 1) {
    triangle.push([1])
  }
  for (let row = 1; row < numberOfRows; row++) {
    const previousRow = triangle[row - 1]
    const currentRow = Array(previousRow.length + 1).fill()
      .map((_, j) => (previousRow[j - 1] ?? 0) + (previousRow[j] ?? 0))
    triangle.push(currentRow)
  }
  return triangle
}
