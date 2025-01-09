import {getCustomers} from "@/lib/queries/getCustomer";
import {getTicket} from "@/lib/queries/getTicket";
import {BackButton} from "@/components/BackButton";
import {error} from "next/dist/build/output/log";

export default async function TicketFormPage({
    searchParams,}:{
    searchParams: Promise<{[key: string]: string | undefined}>
}){
    try {
        const {customerId, ticketId} = await searchParams

        if(!customerId && !ticketId){
            return(
                <>
                    <h2 className="text-center mb-2">
                        Customer ID and Ticket ID is required to load the ticket form
                    </h2>
                    <BackButton title={"Back"} variant="default"/>
                </>
            )
        }

        // New ticket form
        if(customerId){
            const customer = await getCustomers(parseInt(customerId));
            if(!customer){
                return(
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID: {customerId} not found
                        </h2>
                        <BackButton title={"Back"} variant="default"/>
                    </>
                )
            }

            if(!customer.isActive){
                return(
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID: {customerId} is not active
                        </h2>
                        <BackButton title={"Back"} variant="default"/>
                    </>
                )
            }

            //return ticket form
            console.log(customer);
        }

        if(ticketId){
            const ticket = await getTicket(parseInt(ticketId));
            if(!ticket){
                return(
                    <>
                        <h2 className="text-2xl mb-2">
                            Ticket No: {ticketId} not found
                        </h2>
                        <BackButton title={"Back"} variant="default"/>
                    </>
                )
            }

            const customer = await getCustomers(ticket.customerId);
            // return ticket edit form
            console.log('ticket : ', ticket );
            console.log('customer: ', customer);
        }
    }
    catch(e){
     if (e instanceof error){
         throw e;
     }
    }
}