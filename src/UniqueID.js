// used for matching input labels to their corresponding input. for a11y reasons
let UUID = 0

export default function UniqueID() {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID,
  }
}
