import { createFileRoute } from '@tanstack/react-router'
import PickPortal from '@/pages/PickPortal'

export const Route = createFileRoute('/pick-portal')({
  component: PickPortal,
})