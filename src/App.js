import React, {Component} from 'react';
import AppHeader from "./components/appHeader";
import SearchPanel from "./components/searchPanel";
import PostStatusFilter from "./components/postStatusFilter";
import PostList from "./components/postList";
import PostAddForm from "./components/postAddForm";
import '../src/css/app.css'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.deletePost = this.deletePost.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLike = this.onToggleLike.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)

        this.maxId = 4
    }
    deletePost(id) {
        this.setState(({data}) => {
            const ind = data.findIndex(pos => pos.id === id)

            const newArray = [...data.slice(0, ind), ...data.slice(ind+1)]
            return {
                data: newArray
            }
        })
    }
    addItem(title) {
        const newItem = {
            label: title,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const arr = [...data, newItem]
            return {
                data: arr
            }
        })
    }
    onToggleImportant(id) {
        this.setState(({data}) => {
            const ind = data.findIndex(pos => pos.id === id)
            const newItem = {...data[ind], important: !data[ind].important}
            const newArray = [...data.slice(0, ind), newItem, ...data.slice(ind+1)]
            return {
                data: newArray
            }
        })
    }
    onToggleLike(id) {
        this.setState(({data}) => {
            const ind = data.findIndex(pos => pos.id === id)
            const newItem = {...data[ind], like: !data[ind].like}
            const newArray = [...data.slice(0, ind), newItem, ...data.slice(ind+1)]
            return {
                data: newArray
            }
        })
    }
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }
    filterPosts(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }
    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const  liked = data.filter(item => item.like === true).length
        const all = data.length
        const visible = this.filterPosts(this.searchPost(data, term), filter)
        return (
            <div className='app'>
                <AppHeader
                    like={liked}
                    allPost={all}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visible}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}
export default App;
