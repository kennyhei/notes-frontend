import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Note from '../components/Note'

describe('<Note />', () => {
    test('renders content', () => {

        const note = {
            content: 'Komponenttitestaus tapahtuu mochalla ja enzymellä',
            important: true
        }

        const noteComponent = shallow(<Note note={note} />)
        const contentDiv = noteComponent.find('.content')

        expect(contentDiv.text()).toContain(note.content)
    })

    test('clicking the button calls the event handler once', () => {
        const note = {
            content: 'Komponenttitestaus tapahtuu mochalla ja enzymellä',
            important: true
        }

        const mockHandler = sinon.spy()

        const noteComponent = shallow(
            <Note
              note={note}
              toggleImportance={mockHandler}
            />
          )
        
        const button = noteComponent.find('button')
        button.simulate('click')
    
        sinon.assert.calledOnce(mockHandler)
    })
})