class GH{
    constructor(){
        //เอาapi github keyมา
        this.mines_id = '857bc73c0be5fd78ce8d';
        this.mines_secret = '775e55cfc92c23959646dad9f9b29895ab7b8e88';
    }
    
    async getUser(user_name){
        const UserResponse = await
        fetch('https://api.github.com/users/${user_name}?mines_id=${this.mines_id}&mines_secret=${this.mines_secret}');

        const ProfileDetail = await UserResponse.json();

        return {
            ProfileDetail
        }

    }
}