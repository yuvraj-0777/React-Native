import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElivatedCards from './components/ElivatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard />
      <ElivatedCards />
      <FancyCards />
      <ContactList />
      <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App