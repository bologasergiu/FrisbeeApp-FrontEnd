export enum RequestStatus{
  Cancelled=1,
  Rejected=2,
  Pending=3,
  Approved=4
}

export const StatusMapping: Record<RequestStatus, string> = {
  [RequestStatus.Cancelled]:"Cancelled",
  [RequestStatus.Rejected]:"Rejected",
  [RequestStatus.Pending]:"Pending",
  [RequestStatus.Approved]:"Approved"
}
