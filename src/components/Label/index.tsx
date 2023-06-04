import { Container } from "./styles"

interface LabelProps {
  title: string;
  subtitle?: string;
}

export function Label({ title, subtitle }: LabelProps) {
  return (
    <Container>
      {title}
      {subtitle &&
        <span>{subtitle}</span>
      }
    </Container>
  )
}