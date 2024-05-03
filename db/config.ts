import { defineDb, defineTable, column } from 'astro:db'

const PlanDate = defineTable({
  columns: {
    id: column.number(),
    date: column.text(),
    content: column.text(),
  },
})

const PlanDetail = defineTable({
  columns: {
    id: column.number(),
    title: column.text(),
    time: column.text(),
  },
})

export default defineDb({
  tables: { PlanDate, PlanDetail },
})
