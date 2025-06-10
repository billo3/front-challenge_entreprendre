// import React from 'react';

// function EvaluationList({ evaluations, userRole, onEdit }) {
//     return (
//         <div className="widget">
//             <div className="widget-header">
//                 <h3>Mes Évaluations</h3>
//             </div>
//             <div className="widget-content">
//                 {evaluations.length === 0 ? (
//                     <p>Aucune évaluation soumise pour le moment.</p>
//                 ) : (
//                     <table className="evaluation-table">
//                         <thead>
//                             <tr>
//                                 <th>Projet</th>
//                                 <th>Score</th>
//                                 <th>Date</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {evaluations.map((eval) => (
//                                 <tr key={eval.id}>
//                                     <td>{eval.projectName}</td>
//                                     <td>{eval.score}</td>
//                                     <td>{eval.date}</td>
//                                     <td>
//                                         <button className="btn btn-sm btn-primary" onClick={() => onEdit(eval)}>
//                                             <i className="fas fa-edit"></i> Modifier
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//                 {userRole === 'president' && (
//                     <div className="widget-actions">
//                         <a href="/evaluations-consolidees" className="btn btn-primary">
//                             <i className="fas fa-table"></i> Voir Évaluations Consolidées
//                         </a>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default EvaluationList;