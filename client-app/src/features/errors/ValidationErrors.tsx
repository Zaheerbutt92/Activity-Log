import React from "react";
import { Message } from "semantic-ui-react";

interface Props
{
    errors: string[] | null;
}
export default function ValidationErrors({errors}:Props){
    return(
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((err:any, index) => (
                        <Message.Item key={index}>{err}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>
    )

}