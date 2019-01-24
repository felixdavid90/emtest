import { UPDATE } from 'react-admin';
export const COMMENT_APPROVE = 'COMMENT_APPROVE';
export const commentApprove = (id, data, basePath) => ({
    type: COMMENT_APPROVE,
    payload: { id, data: { ...data, is_approved: true } },
    meta: {
        resource: 'comments',
        fetch: UPDATE,
       onSuccess: {
          notification: {
               body: 'resources.comments.notification.approved_success',
               level: 'info',
           },
           redirectTo: '/comments',
           basePath,
       },
       onFailure: {
           notification: {
               body: 'resources.comments.notification.approved_failure',
               level: 'warning',
           },
       },
    },
});
