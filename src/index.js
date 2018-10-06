import createHistory from "history/createBrowserHistory"
import React from "react"
import { render } from "react-dom"
import { Router } from "react-router"
import Access from "./components/Access.js"

const history = createHistory()

const app = document.getElementById("app")

render(
	<Router history={history}>
		<Access />
	</Router>,
	app,
)
