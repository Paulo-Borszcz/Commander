import { Helmet } from "react-helmet-async"
import { MonthClosedTickets } from "./month-closed-tickets"
import { DayTicketsOverview } from "./day-tickets-overview"
import { ManageTickets } from "./manage-tickets"
import { TicketsMoved } from "./tickets-moved"
import { TicketsChart } from "./tickets-chart"
import { CategoryChart } from "./category-chart"

export function Dashboard() {
      return (
            <><Helmet title="Dashboard" />
                  <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                        <div className="grid grid-cols-4 gap-4">
                              <DayTicketsOverview />
                              <MonthClosedTickets />
                              <TicketsMoved/>
                              <ManageTickets/>
                        </div>

                        <div className="grid grid-cols-9 gap-4">
                              <TicketsChart/>
                              <CategoryChart/>
                        </div>
                  </div>
            </>
      )
}