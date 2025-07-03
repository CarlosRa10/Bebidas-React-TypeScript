import type { StateCreator} from 'zustand'

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
}

//no consumira otros slice solo NotificationSliceType
export const createNotificationSlice: StateCreator<NotificationSliceType> = (set,get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    }
})

