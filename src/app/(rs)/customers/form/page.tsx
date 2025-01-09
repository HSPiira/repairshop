import {getCustomers} from "@/lib/queries/getCustomer";
import {BackButton} from "@/components/BackButton";

export default async function customerFormPage({
    searchParams,
}:{
    searchParams: Promise<{[key: string]: string | undefined}>
}){
    try{
        const {customerId} = await searchParams

        if(customerId){
            const customer = await getCustomers(parseInt(customerId));
            if(!customer){
                return(
                    <>
                        <h2 className="text-center mb-2">
                            Customer ID: {customerId} not found
                        </h2>
                        <BackButton title={"Back"} variant="default"/>
                    </>
                    )
            }
            console.log(customer);
            // put customer form
        }
        else {
            // new customer form
        }
    }
    catch(err){
        if (err instanceof Error){
            throw err;
        }
    }
}