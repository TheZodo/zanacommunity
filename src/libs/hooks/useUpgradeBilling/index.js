import { useMutation } from '@apollo/react-hooks';
import { getUser } from 'libs/utils/authUtil'
import { BILLING_UPGRADED } from './constants/GqlQueries';
import { useEffect } from 'react'

const Paddle = window.Paddle;

const useUpgradeBilling = () => {
    const [mutate, { data, error }] = useMutation(BILLING_UPGRADED, {
        onError: (e) => console.log(e)
    })

    useEffect(() => {

        if (data || error) {
            window.location.reload(true);
        }
    }, [data, error])

    const upgradeBilling = (productId) => {
        const user = getUser()

        Paddle.Checkout.open({

            product: productId,
            email: user.email,
            disableLogout: true,
            successCallback: (data, err) => {
                mutate()
            }
        });
    }

    return { upgradeBilling }
}
export default useUpgradeBilling