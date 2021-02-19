import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Button, Form } from "react-bootstrap"

const DefaultPage = ({ navigate, finishedLoading, create, join }) => {
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  useEffect(finishedLoading ,[finishedLoading]);

  const onCreate = async () => {
      const result = await create()
      navigate(`session/${result.identifier}/configuration`)
  }

  const onJoin = async () => {
      await join(identifier, name)
      navigate(`session/${identifier}/questions`)
  }
  return (<div id="container">
    <Button onClick={onCreate}> Create New</Button>
    <Form.Control type="text" placeholder="Enter Name" value={ name } onChange={(event) => setName(event.target.value)} />
    <Form.Control type="text" placeholder="Enter Identifier" value={ identifier } onChange={(event) => setIdentifier(event.target.value)} />
    <Button onClick={onJoin}> Join </Button>
  </div>)
}

export const Default = (props) => <DefaultPage {...props} />;
