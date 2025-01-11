import {getCustomers} from "@/lib/queries/getCustomer";
import {BackButton} from "@/components/BackButton";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

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
                        <h2 className="text-2xl mb-2">
                            Customer ID: {customerId} not found
                        </h2>
                        <BackButton title={"Back"} variant="default"/>
                    </>
                    )
            }
            console.log(customer);
            // put customer form
            return <CustomerForm customer={customer} />
        }
        else {
            // new customer form
            return <CustomerForm />
        }
    }
    catch(err){
        if (err instanceof Error){
            throw err;
        }
    }
}