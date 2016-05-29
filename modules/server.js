import React from 'react'
import { createServer } from 'react-project/server'
import { RouterContext } from 'react-router'
import Document from '../modules/components/Document'
import routes from '../modules/routes'
import mongoose from 'mongoose'
import User from './models/user'
import passport from 'passport'
import session from 'express-session'
import local from 'passport-local'
let LocalStrategy = local.Strategy

function getApp(req, res, requestCallback) {
  // here is your chance to do things like get an auth token and generate
  // your route config w/ request aware `onEnter` hooks, etc.
  requestCallback(null, {
    routes: routes,
    render(routerProps, renderCallback) {
      // here is your chance to load up data before rendering and pass it to
      // your top-level components
      renderCallback(null, {
        renderDocument: (props) => <Document {...props}/>,
        renderApp: (props) => <RouterContext {...props}/>
      })
    }
  })
}

let server = createServer(getApp)

mongoose.createConnection('mongodb://localhost/barbook-auth')

server.use( session({ secret: 'secret', saveUninitialized: true, resave: true }))
server.use(passport.initialize())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

let mongoUri = process.env.MONGODB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/barbook'

mongoose.createConnection('mongodb://localhost/auth-3')
mongoose.createConnection(mongoUri)

server.start()
