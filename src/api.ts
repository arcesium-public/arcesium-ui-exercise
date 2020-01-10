import { getCurrentWires, setCurrentWires } from './database';
import { pick } from 'lodash';

export type WireGroupID = number
export type WireID = number
export type ISOLocalDate = string // YYYY-MM-DD
export type ISOTimestamp = string // ISO 8601 Zulu timestamp


export interface WireSummary {
    wireId: WireID,
    category: string,
    wireDate: ISOLocalDate,
    valueDate: ISOLocalDate,
    currency: string,
    amount: number

    sourceCompany: string,
    sourceAccountName: string,
    sourceAccountNumber: string,

    destinationCompany: string,
    destinationAccountName: string,
    destinationAccountNumber: string
}

export interface WireComment {
    name: string,
    timestamp: ISOTimestamp,
    comment: string    
}

export interface WireDetail extends WireSummary {
    sourceEntity: string,
    destinationEntity: string,
    statusCode: "PENDING_APPROVAL" | "APPROVED" | "REJECTED",
    subject: string,
    createdBy: string,
    reviewer: string,
    signatory: string,
    comments: WireComment[]
}


export async function GetPendingWireSummaries(): Promise<WireSummary[]> {
    const currentWires = await getCurrentWires();
    return currentWires.filter(w => w.statusCode === "PENDING_APPROVAL").map(w => pick(w,[
        'wireId',
        'category',
        'wireDate',
        'valueDate',
        'currency',
        'amount',
        'sourceCompany',
        'sourceAccountName',
        'sourceAccountNumber',
        'destinationCompany',
        'destinationAccountName',
        'destinationAccountNumber'
    ]));
}

export async function GetWireDetail(wireId: WireID): Promise<WireDetail> {
    const currentWires = await getCurrentWires();
    return currentWires.filter(w => w.wireId === wireId)[0];
} 

export async function ApproveWires(wireIds: WireID[], comment?: string) {
    const currentWires = await getCurrentWires();
    const newWires = currentWires.map(w => ({
        ...w,
        statusCode: wireIds.includes(w.wireId) ? "APPROVED" : w.statusCode,
        signatory: "testuser",
        comments: wireIds.includes(w.wireId) && comment ? [...w.comments, {
            name: "testuser",
            timestamp: new Date().toISOString(),
            comment
        }] : w.comments
    }));
    await setCurrentWires(newWires);
}

export async function RejectWires(wireIds: WireID[], comment?: string) {
    const currentWires = await getCurrentWires();
    const newWires = currentWires.map(w => ({
        ...w,
        statusCode: wireIds.includes(w.wireId) ? "REJECTED" : w.statusCode,
        comments: wireIds.includes(w.wireId) && comment ? [...w.comments, {
            name: "testuser",
            timestamp: new Date().toISOString(),
            comment
        }] : w.comments
    }));
    await setCurrentWires(newWires);
}

export async function CommentWires(wireIds: WireID[], comment?: string) {
    const currentWires = await getCurrentWires();
    const newWires = currentWires.map(w => ({
        ...w,
        comments: wireIds.includes(w.wireId) && comment ? [...w.comments, {
            name: "testuser",
            timestamp: new Date().toISOString(),
            comment
        }] : w.comments
    }));
    await setCurrentWires(newWires);
}
