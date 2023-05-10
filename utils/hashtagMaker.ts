export default function hashtagMaker(items: string) {
  return items
    ?.split(", ")
    .map((el: string) => "#" + el)
    .join(", ");
}
