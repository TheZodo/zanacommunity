const { RESTDataSource } = require('apollo-datasource-rest');


class JarvisAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://server.apaloans.co.zm/jarvis';

    }

    willSendRequest(request) {

        request.headers.set("content-type", "application/json");
    }

    /**
     * 
     */
    loanRequest = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `${email} has opened a loan request for K${amount}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

      /**
     * 
     */
       approvedLoan = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `Approved loan of K${amount} for ${email}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

       /**
     * 
     */
       denyLoan = async ({email, amount,reason}) => {
        await this.get('/apaloanz',
            {
                "message": `Denied loan of K${amount} for ${email}. 
reason: ${reason}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

    /**
     * 
     */
     paymentRequest = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `${email} has opened a payment request for K${amount}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

    /**
     * 
     */
     investorDepositRequest = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `Investor ${email} has opened a deposit request for K${amount}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

     /**
     * 
     */
      investorWithdrawRequest = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `Investor ${email} has opened a withdraw request for K${amount}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }



      /**
     * 
     */
       approvedPayment = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `Approved payment of K${amount} for ${email}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

       /**
     * 
     */
       denyPayment = async ({email, amount,reason}) => {
        await this.get('/apaloanz',
            {
                "message": `Denied payment of K${amount} for ${email}. 
reason: ${reason}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

      /**
     * 
     */
       approvedDeposit = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `Approved deposit of K${amount} for investor ${email}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

       /**
     * 
     */
       denyDeposit = async ({email, amount,reason}) => {
        await this.get('/apaloanz',
            {
                "message": `Denied deposit of K${amount} for investor ${email}. 
reason: ${reason}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

      /**
     * 
     */
       approvedWithdraw = async ({email, amount}) => {
        await this.get('/apaloanz',
            {
                "message": `Approved withdraw of K${amount} for investor ${email}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

       /**
     * 
     */
       denyWithdraw = async ({email, amount,reason}) => {
        await this.get('/apaloanz',
            {
                "message": `Denied withdraw of K${amount} for investor ${email}. 
reason: ${reason}`
            }).catch((e) => console.log(JSON.stringify(e)))
    }

       /**
     * 
     */
        approvedVerification = async ({identifier}) => {
            await this.get('/apaloanz',
                {
                    "message": `Approved verification for ${identifier}`
                }).catch((e) => console.log(JSON.stringify(e)))
        }
    
           /**
         * 
         */
           denyVerification = async ({identifier,reason}) => {
            await this.get('/apaloanz',
                {
                    "message": `Denied verification for ${identifier}. 
    reason: ${reason}`
                }).catch((e) => console.log(JSON.stringify(e)))
        }

}

module.exports = JarvisAPI 