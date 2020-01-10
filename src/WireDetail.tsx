import React from "react";
import { observer } from "mobx-react";
import { promisedComputed } from 'computed-async-mobx';

import { Link } from 'react-router-dom';

import {
  WireID,
  WireDetail,
  GetWireDetail,
  ApproveWires,
  RejectWires,
  CommentWires
} from './api';


interface Props {
  match: { params: { wireId: string } }
}

@observer
class WireDetailPage extends React.Component<Props> {

  wireDetail = promisedComputed(null, async () => {
    const wireId = Number(this.props.match.params.wireId);
    return GetWireDetail(wireId)
  })

  approveWire = async (comment?: string) => {
    const wireId = Number(this.props.match.params.wireId);
    await ApproveWires([wireId], comment);
    this.wireDetail.refresh();
  }

  rejectWire = async (comment?: string) => {
    const wireId = Number(this.props.match.params.wireId);
    await RejectWires([wireId], comment);
    this.wireDetail.refresh();
  }

  commentWire = async (comment?: string) => {
    const wireId = Number(this.props.match.params.wireId);
    await CommentWires([wireId], comment);
    this.wireDetail.refresh();
  }



  render() {

    const wireId = Number(this.props.match.params.wireId);
    const {
      approveWire,
      rejectWire,
      commentWire
    } = this;
    const wireDetail: WireDetail | null = this.wireDetail.get();

    const isPendingApproval = wireDetail && wireDetail.statusCode === "PENDING_APPROVAL";
 
    return (
      <div>
        <Link to={`/wires`}>Back</Link>
        <p>WireID: {wireId}</p>

        { isPendingApproval &&
          <button onClick={ () => {
            const comment = prompt("Approval Comment");
            // Note: prompt will return null/undefined if user cancels
            if(comment !== null && comment !== undefined) {
              approveWire(comment);
            }
          }}>Approve</button>
        }
        { isPendingApproval &&
          <button onClick={ () => {
            const comment = prompt("Rejection Comment");
            // Note: prompt will return null/undefined if user cancels
            if(comment !== null && comment !== undefined) {
              rejectWire(comment);
            }
          }}>Reject</button>
        }
        <button onClick={ () => {
          const comment = prompt("Comment");
          // Note: prompt will return null/undefined if user cancels
          if(comment !== null && comment !== undefined) {
            commentWire(comment);
          }
        }}>Comment</button>

        { wireDetail &&
          <p>
            Category: { wireDetail.category}<br/>
            WireDate: { wireDetail.wireDate}<br/>
            ValueDate: { wireDetail.valueDate}<br/>
            Currency: { wireDetail.currency}<br/>
            Amount: { wireDetail.amount}<br/>

            SourceEntity: { wireDetail.sourceEntity}<br/>
            SourceCompany: { wireDetail.sourceCompany}<br/>
            SourceAccountName: { wireDetail.sourceAccountName}<br/>
            SourceAccoutNumber: { wireDetail.sourceAccountNumber}<br/>

            DestinationEntity: { wireDetail.destinationEntity }<br/>
            DestinationCompany: { wireDetail.destinationCompany}<br/>
            DestinationAccountName: { wireDetail.destinationAccountName}<br/>
            DestinationAccountNumber: { wireDetail.destinationAccountNumber}<br/>

            StatusCode: { wireDetail.statusCode}<br/>
            Subject: { wireDetail.subject}<br/>
            CreatedBy: { wireDetail.createdBy}<br/>
            Reviewer: { wireDetail.reviewer}<br/>
            Signatory: { wireDetail.signatory}<br/>
          </p>
        }

        { wireDetail && wireDetail.comments.map((comment, idx) => (
          <p key={idx}>
            User: { comment.name }<br/>
            Timestamp: { comment.timestamp }<br/>
            Comment: { comment.comment }<br/>
          </p>
        ))}


      </div>
    )
  }
}

/*
    statusCode: "PENDING_APPROVAL" | "APPROVED" | "REJECTED",
    subject: string,
    createdBy: string,
    reviewer: string,
    signatory: string,
    comments: WireComment[]
    */

export default WireDetailPage
