export default function Icon({ name }: { name: string }) {
  return <i className={`fa fa-${name}`} aria-hidden="true" />
}
