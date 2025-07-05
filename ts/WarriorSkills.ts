/**
 * functions for fighters
 */
export interface WarriorSkills {

    impactOfYourAttack(whatToAttackWith: number, whereToAttack: number, success: boolean): string[];
}