<template>
    <div class="todo-list">
        <div v-if="Array.isArray(todos) && todos.length > 0">
            <transition-group name="list" tag="div">
                <todo-item v-for="(todo, index) in todos" @show="changeEdit" :todo="todo" :key="index" :index="index"></todo-item>

            </transition-group>
        </div>
        <div class="none" v-else>您暂时还没有添加任何代办项</div>
        <p class="todo-edit" v-bind:style="{ display: isShow }" ref="editContainer">
            <input type="text" :value="editTodo" maxlength="100" ref="edit" @keyup.enter="doEditTodo" @blur="doEditTodo">
        </p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TodoItem from './TodoItem.vue';

export default {
	data() {
		return {
			index: -1
		};
	},
	components: { TodoItem },
	computed: {
		...mapGetters({ todos: 'allTodos' }),
		editTodo: function() {
			const todo = this.$store.state.todos[this.index];
			return (todo && todo.content) || '';
		},
		isShow: function() {
			return this.index > -1 ? 'block' : 'none';
		}
	},
	methods: {
		changeEdit(peyload) {
			const { index, top, left } = peyload;
			this.index = index;
			const $editContainer = this.$refs.editContainer;
			$editContainer.style.top = top + 'px';
			$editContainer.style.left = left + 'px';
		},
		doEditTodo($event) {
			const content = this.$refs.edit.value;
			if (!content) return;
			this.$store.commit('UPDATE_TODO', {
				index: this.index,
				content
			});
			this.index = -1;
		}
	},
	watch: {
		$route(newRoute, oldRoute) {
			const { type } = newRoute.meta;
			this.$store.dispatch('getTodoList', type);
		}
	},

	created() {
		const { type } = this.$route.meta;
		this.$store.dispatch('getTodoList', type);
	}
};
</script>

<style lang="scss" scoped>
.todo-list {
	width: 60%;
	margin: 0 auto;

	.none {
		font-size: 12px;
		color: #c3d8d8;
		text-align: center;
	}

	.todo-edit {
		width: 60%;
		overflow: hidden;
		word-wrap: none;
		padding-left: 30px;
		margin: 0 auto;
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.25s ease;
		z-index: 100;

		input {
			display: inline-block;
			height: 30px;
			line-height: 32px;
			background-color: white;
			padding: 0 5px;
			width: 100%;
			font-size: 0.9rem;
		}
	}
	.list-enter-active,
	.list-leave-active {
		transition: all 0.25s;
	}
	.list-enter,
	.list-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
}
</style>
