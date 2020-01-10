import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { promisedComputed } from 'computed-async-mobx';

import { Link } from 'react-router-dom';
import {
  WireID,
  WireSummary,
  GetPendingWireSummaries,
  ApproveWires,
  RejectWires,
  CommentWires
} from './api';



@observer
class WireSummaryPage extends React.Component {

  pendingWireSummaries = promisedComputed([], async () => GetPendingWireSummaries())

  @observable.ref
  userSelectedWireIds: WireID[] = []

  selectWireId = (wireId: WireID) => {
    this.userSelectedWireIds = [...this.userSelectedWireIds.filter(w => w !== wireId), wireId];
  }
  deselectWireId = (wireId: WireID) => {
    this.userSelectedWireIds = this.userSelectedWireIds.filter(w => w !== wireId);
  }

  approveWireIds = async (wireIds: WireID[], comment?: string) => {
    await ApproveWires(wireIds, comment);
    this.userSelectedWireIds = [];
    this.pendingWireSummaries.refresh();
  }

  rejectWireIds = async (wireIds: WireID[], comment?: string) => {
    await RejectWires(wireIds, comment);
    this.userSelectedWireIds = [];
    this.pendingWireSummaries.refresh();
  }

  commentWireIds = async (wireIds: WireID[], comment?: string) => {
    await CommentWires(wireIds, comment);
    this.pendingWireSummaries.refresh();
  }

  render() {

    const {
      userSelectedWireIds,
      selectWireId,
      deselectWireId,
      approveWireIds,
      rejectWireIds,
      commentWireIds
    } = this;

    const pendingWireSummaries: WireSummary[] = this.pendingWireSummaries.get();

    const availableWireIds = pendingWireSummaries.map(w => w.wireId);
    const selectedWireIds = userSelectedWireIds.filter(wireId => availableWireIds.includes(wireId));

    return (
      <div>

        <p>{ selectedWireIds.length } Wires Selected</p>
        <button onClick={ () => {
          const comment = prompt("Approval Comment");
          // Note: prompt will return null/undefined if user cancels
          if(comment !== null && comment !== undefined) {
            approveWireIds(selectedWireIds, comment);
          }
        }}>Approve</button>
        <button onClick={ () => {
          const comment = prompt("Rejection Comment");
          // Note: prompt will return null/undefined if user cancels
          if(comment !== null && comment !== undefined) {
            rejectWireIds(selectedWireIds, comment);
          }
        }}>Reject</button>
        <button onClick={ () => {
          const comment = prompt("Comment");
          // Note: prompt will return null/undefined if user cancels
          if(comment !== null && comment !== undefined) {
            commentWireIds(selectedWireIds, comment);
          }
        }}>Comment</button>

        { pendingWireSummaries.map(wireSummary => {
          const wireId = wireSummary.wireId;
          const isWireSummarySelected = selectedWireIds.includes(wireSummary.wireId)

          return (
            <div key={wireId}>
              { isWireSummarySelected ? <button onClick={() => deselectWireId(wireId)}>x</button> : <button onClick={() => selectWireId(wireId)}>o</button>}
              <Link to={`/wires/${wireId}`}>Detail</Link>
              <p>
                WireID: { wireSummary.wireId}<br/>
                Category: { wireSummary.category}<br/>
                WireDate: { wireSummary.wireDate}<br/>
                ValueDate: { wireSummary.valueDate}<br/>
                Currency: { wireSummary.currency}<br/>
                Amount: { wireSummary.amount}<br/>
                SourceCompany: { wireSummary.sourceCompany}<br/>
                SourceAccountName: { wireSummary.sourceAccountName}<br/>
                SourceAccoutNumber: { wireSummary.sourceAccountNumber}<br/>
                DestinationCompany: { wireSummary.destinationCompany}<br/>
                DestinationAccountName: { wireSummary.destinationAccountName}<br/>
                DestinationAccountNumber: { wireSummary.destinationAccountNumber}<br/>
              </p>
            </div>
          )
        })}
      </div>
    );
  }


}

export default WireSummaryPage
