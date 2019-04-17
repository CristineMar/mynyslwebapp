<template>
    <div class="chat container">
        <h2 class="text-primary text-center">Real-Time Chat</h2>
        <h5 class="text-secondary text-center">NYSL Chat</h5>
        <div class="card">
            <div class="card-body">
                <p class="nomessages text-secondary" v-if="messages.length == 0">
                    [No messages yet!]
                </p>
                <div class="messages" v-chat-scroll="{always: false, smooth: true}">
                    <div v-for="message in messages" :key="message.id">
                        <span class="text-info">[{{ message.name }}]: </span>
                        <span>{{message.message}}</span>
                        <span class="text-secondary time">{{message.timestamp}}</span>
                    </div>
                </div>
            </div>
            <div class="card-action">
                <CreateMessage :name="name"/>
            </div>
        </div>
    </div>
</template>



<script>
    import CreateMessage from '@/components/CreateMessage';
    import fb from '@/firebase/init';
    import moment from 'moment';
    export default {
        name: 'Chat',
        props: ['name'],
        components: {
            CreateMessage
        },
        data() {
            return{
                messages: []
            }
        },
        created() {
            let ref = fb.collection('messages').orderBy('timestamp');
            ref.onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type == 'added') {
                        let doc = change.doc;
                        this.messages.push({
                            id: doc.id,
                            name: doc.data().name,
                            message: doc.data().message,
                            timestamp: moment(doc.data().timestamp).format('LTS')
                        });
                    }
                });
            });
        },
        computed: {
            currentUser () {
                return this.$store.state.currentUser
            }
        }
    }
</script>


<style scoped>
.chat {
    max-width: 400px;
    margin-top: 90px;
}
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4em;
}
.chat time {
    display: block;
    font-size: 1.2em;
}
.chat .msg{
    margin-left: 1%;
}
.chat input {
    width: 100%;
}
</style>