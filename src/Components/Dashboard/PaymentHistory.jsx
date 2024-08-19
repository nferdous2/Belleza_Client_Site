import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div className="lg:p-24">
            <h2 className="text-xl text-center p- font-bold">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-black text-white text-xl">
                            <th>#</th>
                            <th>price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>
                                <button
                                    className={`font-bold px-4 py-2 rounded ${payment.status === 'confirmed' ? 'bg-green-500 text-white' : 'bg-pink-200 text-black'}`}
                                >
                                    {payment.status}
                                </button>
                            </td>


                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;