<template>
	<div class="chat-dashboard">
		<ChatNavBar />
		<b-container fluid class="ld-over" v-bind:class="{ running: loading }">
			<div class="ld ld-ring ld-spin"></div>
			<b-row>
				<b-col cols="2">
					<RoomList />
				</b-col>

				<b-col cols="8">
					<b-row>
						<b-col id="chat-content">
							<MessageList />
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<MessageForm />
						</b-col>
					</b-row>
				</b-col>

				<b-col cols="2">
					<UserList />
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import ChatNavBar from '@/components/chatNavBar.vue';
import RoomList from '@/components/roomList.vue';
import MessageList from '@/components/messageList.vue';
import MessageForm from '@/components/messageForm.vue';
import UserList from '@/components/userList.vue';
import {mapState} from 'vuex';

export default {
    name: 'Chat',
    components: {
        ChatNavBar,
        RoomList,
        UserList,
        MessageList,
        MessageForm
    },
    computed: {
        ...mapState([
            'loading'
        ])
    }
}

</script>
