import { db, PlanDate, PlanDetail } from 'astro:db'

export default async function () {
  await db.insert(PlanDate).values([
    { id: 1, date: '11-June-2024', content: 'Hope you like Astro DB!' },
    { id: 2, date: '12-June-2024', content: 'Enjoy!' },
    { id: 3, date: '13-June-2024', content: 'Enjoy!' },
    { id: 4, date: '14-June-2024', content: 'Enjoy!' },
    { id: 5, date: '15-June-2024', content: 'Enjoy!' },
  ])

  await db.insert(PlanDetail).values([
    { id: 1, title: '11-June-2024', time: 'Hope you like Astro DB!' },
    { id: 2, title: '12-June-2024', time: 'Enjoy!' },
    { id: 3, title: '13-June-2024', time: 'Enjoy!' },
    { id: 4, title: '14-June-2024', time: 'Enjoy!' },
    { id: 5, title: '15-June-2024', time: 'Enjoy!' },
  ])
}
