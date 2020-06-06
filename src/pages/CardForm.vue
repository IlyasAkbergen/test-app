<template>
    <div>
        <form>
            <label for="fname">Название</label>
            <input type="text" id="fname" name="firstname" placeholder="Название карточки..."
                   required
                   v-model="card.name" />

            <label for="lname">Описание</label>
            <textarea id="lname" name="lastname"
                      placeholder="Описание карточки..."
                      required
                      v-model="card.description" />

            <div class="flexbox">
                <input class="column" type="submit" value="Сохранить" @click.prevent="submit">
                <input class="column" type="reset" value="Отмена" @click.prevent="$router.push('/')">
            </div>
        </form>
    </div>
</template>

<script>
    import  { mapState, mapActions } from 'vuex'
    export default {
        name: "CardForm",
        computed: {
            ...mapState('columns', {
                card: state =>  state.focusedCard
            })
        },
        methods: {
            ...mapActions('columns', ['submitFocusedCardForm']),
            submit() {
                if (this.validateCard()) {
                    this.submitFocusedCardForm(this.card);
                    this.$router.push('/');
                }
            },
            validateCard() {
                console.log('Не успел добавить vee-validate');
                return this.card.name && this.card.name !== ''
                && this.card.description && this.card.description !== ''
            }
        }
    }
</script>

<style scoped>
    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    input[type=reset] {
        width: 100%;
        background-color: red;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=reset]:hover {
        background-color: darkred;
    }

    div {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }
</style>