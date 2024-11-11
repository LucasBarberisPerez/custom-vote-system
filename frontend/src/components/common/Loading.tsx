interface Props {
    loadingText:string
}
export default function Loading({loadingText}: Props) {
  return (
    <div>
      {loadingText}
    </div>
  )
}
